import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt?: string;
}

const ImageGallery = ({ images, alt = "Gallery image" }: ImageGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-border group">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="aspect-video w-full object-cover cursor-zoom-in"
            onClick={() => setZoomed(true)}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        <button onClick={() => setZoomed(true)} className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="h-4 w-4" />
        </button>

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-primary-foreground" : "w-1.5 bg-primary-foreground/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 overflow-hidden rounded-lg border-2 transition-all ${i === current ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img src={img} alt={`Thumb ${i + 1}`} className="h-16 w-16 object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setZoomed(false)}
          >
            <button onClick={() => setZoomed(false)} className="absolute right-4 top-4 text-primary-foreground">
              <X className="h-6 w-6" />
            </button>
            {images.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-primary-foreground">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-primary-foreground">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <motion.img
              key={current}
              src={images[current]}
              alt={alt}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
