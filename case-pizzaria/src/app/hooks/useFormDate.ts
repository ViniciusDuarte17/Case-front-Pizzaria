import { useState } from "react";

export const useFormDate = () => {
    const [data, setData] = useState({} as any);

    function updateData(id: string, value: any) {
        setData({ ...data, [id]: value })
    }

    return {
        data,
        updateData
    }
}