"use client"

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Input from "./Input";

const SearchInput = () => {

    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debounceValue = useDebounce(value, 500);

    useEffect(() => {
        const query = {
            title: debounceValue
        }

        const url = queryString.stringifyUrl({
            url: '/search',
            query: query
        });
        router.push(url);

    }, [debounceValue, router])

    return (
        <Input
        placeholder="What do you want to listen to ?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default SearchInput;