import { FaUsers, FaDonate, FaBloggerB } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { RiDonutChartLine } from "react-icons/ri";

const Overview = () => {
   return (
      <div className="p-6">
         {/* Stats Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-onset">
            <div className="stat bg-base-100 shadow-md rounded-xl">
               <div className="stat-figure text-primary">
                  <FaUsers className="size-8" />
               </div>
               <div className="stat-title">Users</div>
               <div className="stat-value">1,245</div>
               <div className="stat-desc">↗︎ 12% increase</div>
            </div>

            <div className="stat bg-base-100 shadow-md rounded-xl">
               <div className="stat-figure text-secondary">
                  <MdOutlineCampaign className="size-8" />
               </div>
               <div className="stat-title">Campaigns</div>
               <div className="stat-value">87</div>
               <div className="stat-desc">↗︎ Active Now</div>
            </div>

            <div className="stat bg-base-100 shadow-md rounded-xl">
               <div className="stat-figure text-accent">
                  <FaDonate className="size-8" />
               </div>
               <div className="stat-title">Donations</div>
               <div className="stat-value">৳4.8M</div>
               <div className="stat-desc">↗︎ 20% growth</div>
            </div>

            <div className="stat bg-base-100 shadow-md rounded-xl">
               <div className="stat-figure text-info">
                  <FaBloggerB className="size-8" />
               </div>
               <div className="stat-title">Blog Posts</div>
               <div className="stat-value">152</div>
               <div className="stat-desc">↘︎ Updated Weekly</div>
            </div>
         </div>

         {/* Chart / Report Section */}
         <div className="mt-10 bg-base-100 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
               <RiDonutChartLine className="text-primary" /> Donation Growth Chart
            </h3>
            <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed rounded-lg">
               📈 Chart Placeholder
            </div>
         </div>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a modi laudantium placeat, iusto facilis impedit, vel, excepturi aspernatur maxime unde eligendi. Tenetur provident soluta nobis iste? Nobis itaque nam quia recusandae maiores totam aperiam voluptas, amet dolorum vitae fugit accusamus deleniti beatae nostrum nesciunt saepe. Perferendis quasi dignissimos ab cum maiores neque, voluptatem cupiditate provident reiciendis molestiae sed minus voluptates, explicabo laborum consequatur hic odio! Impedit debitis quas in, dolore quaerat, cumque aut enim maxime porro illum totam nihil ut provident maiores earum dolorem similique velit ad perferendis explicabo iusto vel aperiam? Ut repellat quidem voluptate ratione officiis harum.
      </div>
   );
};

export default Overview;
