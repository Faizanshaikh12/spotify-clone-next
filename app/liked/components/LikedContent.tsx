"use client"

import { useUser } from "@/hooks/useUser";
import { Song } from "../../../types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import { log } from "console";

interface LikeContentProps {
    songs: Song[]
}

const LikedContent = ({ songs }: LikeContentProps) => {

    const router = useRouter();
    const { isLoading, user } = useUser();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router])

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                No liked songs.
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-2 w-full px-6">
            {songs.map((song) => (
                <div className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem
                            onClick={() => { }}
                            song={song}
                        />
                    </div>
                    <LikeButton songId={song.id}/>
                </div>
            ))}
        </div>
    )
}

export default LikedContent;