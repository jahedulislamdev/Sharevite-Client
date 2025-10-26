import React, { useMemo, useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiEye, FiTrash2 } from 'react-icons/fi';
import { ContentLoading } from '../../Components/Loading/Loading';
import ContentError from '../Error/ContentError';
import useGetData from './../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

// Modern Volunteers table with search + filtering
// Uses Tailwind / DaisyUI utility classes (you can tweak colors to match your theme)

export default function VolunteersTable() {
   // load volunteeers
   const { data: allVolunteers, isLoading, error } = useGetData('/volunteers', 'allVolunteers');

   // delete volunteers 
   const { mutate: volunteers } = useDeleteData('/volunteers', "", "volunteers")
   const handleDeleteCampaigns = (id) => {
      Swal.fire({
         title: "আপনি কি নিশ্চিত?",
         text: "আপনি এটি আর পূর্বাবস্থায় ফিরিয়ে আনতে পারবেন না!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "ডিলিট করুন",
         cancelButtonText: "বাতিল"
      }).then(async (result) => {
         if (result.isConfirmed) {
            volunteers(id);
            toast.success("ভোলান্টিয়ার সফল ভাবে মুছে ফেলা হয়েছে!", { duration: 10000 })
         }
      });

   };

   const [query, setQuery] = useState('');
   const [occupationFilter, setOccupationFilter] = useState('All');
   const [educationFilter, setEducationFilter] = useState('All');
   const [sortAsc, setSortAsc] = useState(true);

   // derive filter options from data
   const occupations = useMemo(() => {
      if (!allVolunteers) return [];
      const set = new Set(allVolunteers.map((v) => v.occupation).filter(Boolean));
      return ['All', ...Array.from(set)];
   }, [allVolunteers]);

   const educationLevels = useMemo(() => {
      if (!allVolunteers) return [];
      const set = new Set(allVolunteers.map((v) => v.educationLevel).filter(Boolean));
      return ['All', ...Array.from(set)];
   }, [allVolunteers]);

   // filtered + searched + sorted data
   const filtered = useMemo(() => {
      if (!allVolunteers) return [];

      const q = query.trim().toLowerCase();

      let list = allVolunteers.filter((v) => {
         // filter by occupation
         if (occupationFilter !== 'All' && v.occupation !== occupationFilter) return false;
         if (educationFilter !== 'All' && v.educationLevel !== educationFilter) return false;

         // search across fields
         if (!q) return true;
         const hay = `${v.fullName || ''} ${v.email || ''} ${v.phoneNumber || ''} ${v.occupation || ''}`.toLowerCase();
         return hay.includes(q);
      });

      // sort by fullName
      list.sort((a, b) => {
         const A = (a.fullName || '').toLowerCase();
         const B = (b.fullName || '').toLowerCase();
         if (A < B) return sortAsc ? -1 : 1;
         if (A > B) return sortAsc ? 1 : -1;
         return 0;
      });

      return list;
   }, [allVolunteers, query, occupationFilter, educationFilter, sortAsc]);

   if (isLoading) return <ContentLoading />;
   if (error) return <ContentError />;

   return (
      <div className="p-4 rounded-2xl bg-base-200 shadow-md font-onset">
         {/* Header */}
         <div className="md:flex md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
               <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     placeholder="Search by name, email, phone or occupation..."
                     className="pl-10 pr-4 py-2 rounded-lg w-72 bg-base-100 border border-gray-300 focus:border-green-600 outline-none"
                  />
               </div>

               <button
                  type="button"
                  onClick={() => setSortAsc((s) => !s)}
                  className="btn btn-sm btn-ghost gap-2"
                  title={sortAsc ? 'Sort Z → A' : 'Sort A → Z'}
               >
                  Sort by name {sortAsc ? <FiChevronUp /> : <FiChevronDown />}
               </button>
            </div>

            <div className="flex items-center gap-3 mt-3 md:mt-0">
               <select
                  value={occupationFilter}
                  onChange={(e) => setOccupationFilter(e.target.value)}
                  className="select select-bordered bg-base-100 w-44"
               >
                  {occupations.map((o) => (
                     <option key={o} value={o}>{o}</option>
                  ))}
               </select>

               <select
                  value={educationFilter}
                  onChange={(e) => setEducationFilter(e.target.value)}
                  className="select select-bordered bg-base-100 w-44"
               >
                  {educationLevels.map((e) => (
                     <option key={e} value={e}>{e}</option>
                  ))}
               </select>

               <div className="ml-2 text-sm text-gray-500">Showing <span className="font-semibold text-gray-700">{filtered.length}</span></div>
            </div>
         </div>

         {/* Table */}
         <div className="overflow-x-auto rounded-lg">
            <table className="table w-full bg-transparent">
               <thead>
                  <tr className="text-left">
                     <th className="bg-transparent">Name</th>
                     <th className="bg-transparent">Phone</th>
                     <th className="bg-transparent">Email</th>
                     <th className="bg-transparent">Occupation</th>
                     <th className="bg-transparent">Education</th>
                     <th className="bg-transparent text-right">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {filtered.length === 0 ? (
                     <tr>
                        <td colSpan={6} className="text-center py-8 text-yellow-500">No volunteers found.</td>
                     </tr>
                  ) : (
                     filtered.map((v) => (
                        <tr key={v._id || v.id} className="hover:bg-base-100/60">
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                    {v.profileURL ? (
                                       <img src={v.profileURL} alt={v.fullName} className="w-full h-full object-cover" />
                                    ) : (
                                       <div className="w-full h-full flex items-center justify-center text-gray-500">{(v.fullName || '').charAt(0)}</div>
                                    )}
                                 </div>
                                 <div>
                                    <div className="font-semibold">{v.fullName}</div>
                                    <div className="text-xs text-gray-500">{v.organization}</div>
                                 </div>
                              </div>
                           </td>
                           <td><div className="text-sm">{v.phoneNumber}</div></td>
                           <td><div className="text-sm">{v.email}</div></td>
                           <td><div className="text-sm">{v.occupation}</div></td>
                           <td><div className="text-sm">{v.educationLevel}</div></td>
                           <td className="text-right">
                              <div className="flex justify-end gap-2">
                                 <button className="p-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 transition" title="View">
                                    <FiEye />
                                 </button>
                                 <button onClick={() => handleDeleteCampaigns(v._id)} className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition" title="Delete">
                                    <FiTrash2 />
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}
