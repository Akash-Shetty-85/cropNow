import React, { useState, useEffect, useRef } from 'react';
import vides from '@/assets/Video/0401.mp4';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { FocusCards } from '@/components/ui/focus-cards';
import { useOutsideClick } from '@/hooks/use-outside-click';
import productData from '@/data/productData';
import ProductDetails from '@/components/productDetails';


const Technology = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const dialogRef = useRef(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeDialog = () => {
    setSelectedCard(null);
  };

  useOutsideClick(dialogRef, closeDialog);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-full w-screen bg-transparent">
        <video src={vides} autoPlay muted loop className="object-cover w-full h-screen" />
      </div>
      <div className="!my-8 w-screen cursor-pointer"
      >
        <h1 className="text-white text-5xl font-bold text-center my-5 md:!my-10">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4 p-4 overflow-y-auto max-h-[500px]">
          {productData.map((card) => (
            <Card
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="cursor-pointer bg-black text-white p-4 rounded-2xl shadow-md"
            >
              <CardContent>
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-64 object-contain rounded-md mb-2"
                />
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop screens: Display FocusCards */}
        <div className="hidden md:block">
          <FocusCards
            cards={productData}
            className="lg:grid-cols-3  lg:max-w-full gap-10"
            imgClassName="rounded-lg hover:scale-105 transition-transform object-fill items-start"
            onClick={handleCardClick}
          />
        </div>
      </div>
      <AnimatePresence>
        {selectedCard && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
            <motion.div
              ref={dialogRef}
              className="bg-black/70 text-white p-6 rounded-2xl max-w-4/5 max-h-[85vh] overflow-y-auto"
            >
              {/* <h2 className="text-3xl font-bold !mb-4">{selectedCard.title}</h2>
             <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 overflow-y-hidden">
               {selectedCard.details.map((item, index) => (
                  <Card key={index} className="bg-gray-200 p-4 rounded-md shadow">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p>{item.description}</p>
                  </Card>
                ))}
              </div>
              <div className="text-center !mt-4">
                <Button onClick={closeDialog} className="px-6 py-2">Close</Button>
              </div>
*/}
              <ProductDetails data={selectedCard} />

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Technology;
