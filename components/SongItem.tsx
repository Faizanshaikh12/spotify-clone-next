"use client"

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import { data } from "autoprefixer";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
    song: Song;
    onClick: (id: string) => void
}

const SongItem = ({ song, onClick }: SongItemProps) => {

    const imagePath = useLoadImage(song);


    return (
        <div
            onClick={() => onClick(song.id)}
            className="relative group flex flex-col items-center gap-x-4 justify-center rounded-md overflow-hidden bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image
                    fill
                    className="object-cover"
                    alt="Image"
                    src={imagePath || '/images/liked.png'}
                />
            </div>
            <div className="flex flex-col items-center w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full
                ">
                    {song.title}
                </p>
                <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                    By {song.author}
                </p>
            </div>
            <div className="absolute bottom-24 right-5">
                <PlayButton/>
            </div>
        </div>
    )
}

export default SongItem;