import { useEffect, useState } from "react";
import {
    X,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

interface ImageGalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export default function ImageGalleryModal({
    images,
    isOpen,
    onClose,
    title,
}: ImageGalleryModalProps) {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "Escape":
                    onClose();
                    break;

                case "ArrowRight":
                    nextImage();
                    break;

                case "ArrowLeft":
                    previousImage();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, currentImage]);

    useEffect(() => {
        if (isOpen) {
            setCurrentImage(0);
        }
    }, [isOpen]);

    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >

            <div
                className="relative w-[95%] max-w-6xl rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}

                <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            {title}
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            Screenshot {currentImage + 1} of {images.length}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Main Image */}

                <div className="relative flex items-center justify-center bg-black">

                    <button
                        onClick={previousImage}
                        className="absolute left-4 z-10 rounded-full bg-black/50 p-3 text-white transition hover:bg-sky-500"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <img
                        src={images[currentImage]}
                        alt={`${title} Screenshot ${currentImage + 1}`}
                        className="max-h-[70vh] w-full object-contain"
                    />

                    <button
                        onClick={nextImage}
                        className="absolute right-4 z-10 rounded-full bg-black/50 p-3 text-white transition hover:bg-sky-500"
                    >
                        <ChevronRight size={24} />
                    </button>

                </div>

                {/* Thumbnails */}

                <div className="flex gap-3 overflow-x-auto border-t border-gray-800 bg-gray-900 p-5">

                    {images.map((image, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`overflow-hidden rounded-lg border-2 transition
                                ${
                                    currentImage === index
                                        ? "border-sky-500"
                                        : "border-gray-700 hover:border-gray-500"
                                }
                            `}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="h-20 w-32 object-cover"
                            />
                        </button>

                    ))}

                </div>

            </div>

        </div>
    );
}