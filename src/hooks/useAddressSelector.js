import { useQuery } from "@tanstack/react-query";
import {
    getDistrict,
    getDivisions,
    getUions,
    getUpazilla,
} from "../utils/addressApi";
import { useEffect, useState } from "react";

const useAddressSelector = () => {
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedUpazilla, setSelectedUpazilla] = useState(null);
    const [selectedUnion, setSelectedUnion] = useState(null);

    // Divisions — always fetched
    const { data: divisions } = useQuery({
        queryKey: ["divisions"],
        queryFn: () =>
            getDivisions().then((res) => {
                return res.data || [];
            }),
        staleTime: 1000 * 60 * 10,
    });

    // Districts — depends on division
    const { data: districts } = useQuery({
        queryKey: ["districts", selectedDivision?.id],
        queryFn: () =>
            getDistrict(selectedDivision?.id).then((res) => {
                return res.data || [];
            }),
        enabled: !!selectedDivision?.id,
    });

    // Upazilla — depends on districts
    const { data: upazillas } = useQuery({
        queryKey: ["upazilla", selectedDistrict?.id],
        queryFn: () =>
            getUpazilla(selectedDistrict?.id).then((res) => {
                return res.data || [];
            }),
        enabled: !!selectedDistrict?.id,
    });

    // Districts — depends on division
    const { data: unions } = useQuery({
        queryKey: ["unions", selectedUpazilla?.id],
        queryFn: () =>
            getUions(selectedUpazilla?.id).then((res) => {
                return res.data || [];
            }),
        enabled: !!selectedUpazilla?.id,
    });

    // Reset dependencies when division changes
    useEffect(() => {
        setSelectedDistrict(null);
        setSelectedUpazilla(null);
        setSelectedUnion(null);
    }, [selectedDivision]);

    // Reset dependencies when district changes
    useEffect(() => {
        setSelectedUpazilla(null);
        setSelectedUnion(null);
    }, [selectedDistrict]);

    // Reset dependencies when upazilla changes
    useEffect(() => {
        setSelectedUnion(null);
    }, [selectedUpazilla]);

    // check
    useEffect(() => {
        console.log({
            divisions,
            districts,
            upazillas,
            unions,
            selectedDistrict,
            selectedDivision,
            selectedUpazilla,
            selectedUnion,
        });
    });

    // retun
    return {
        divisions,
        districts,
        upazillas,
        unions,
        selectedDivision,
        selectedDistrict,
        selectedUpazilla,
        selectedUnion,
        setSelectedDivision,
        setSelectedDistrict,
        setSelectedUpazilla,
        setSelectedUnion,
    };
};

export default useAddressSelector;
