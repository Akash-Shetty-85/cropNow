import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

const ProductDetails = ({ data }) => {
    if (!data) return <div>Loading...</div>;

    return (
        <div className="bg-transparent w-full h-full overflow-x-hidden rounded-lg">
            <BentoGrid className="w-full h-full md:auto-rows-[10rem]">
                {/* Fixed Image on the Left */}
                <BentoGridItem
                    className="col-span-1 md:col-span-1 md:row-span-2 sticky top-0 bg-transparent "
                    header={
                        <img
                            src={data.src}
                            alt={data.title}
                            className="w-full h-full object-cover rounded-lg "
                        />
                    }
                />
                <BentoGridItem className="col-span-1 md:col-span-1"
                    title={<h1 className='text-bold text-lg md:text-4xl tracking-wide'>{data.title}</h1>}
                    description={<p className=''>{data.description}</p>}
                />

                {data.details && data.details.length > 0 ? (
                    data.details.map((item, index) => (
                        <BentoGridItem
                            key={index}
                            className="col-span-1 md:col-span-1"
                            title={<h3 className="text-xl font-bold">{item.title}</h3>}
                            description={<p>{item.description}</p>}
                        />
                    ))
                ) : (
                    <BentoGridItem
                        className="col-span-1 md:col-span-1"
                        title={<h3 className="text-xl font-bold">No details available</h3>}
                    />
                )}
            </BentoGrid>
        </div>
    );
};

export default ProductDetails;
