import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "../types";
import Image from "next/image";

interface MediaItemProps {
    song: Song;
    onClick?: (id: string) => void;
}

const MediaItem = ({ song, onClick }: MediaItemProps) => {

    const imagePath = useLoadImage(song);

    const handleClick = () => {
        if (onClick) {
            return onClick(song.id);
        }
    }

    return (
        <div onClick={handleClick}
            className="flex items-center gap-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
        >
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image
                    alt="Image"
                    className="object-cover"
                    fill
                    src={imagePath || '/images/liked.png'}
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">
                    {song.title}
                </p>
                <p className="text-neutral-400 text-sm truncate">
                    {song.author}
                </p>
            </div>
        </div>
    )
}

export default MediaItem;