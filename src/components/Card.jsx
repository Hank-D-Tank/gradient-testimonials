import React from 'react';

const Card = ({
    image,
    name,
    text,
    role = ''
}) => {
    return (
        <div className="relative w-[400px] h-48 bg-white/10 border-[1px] border-[#bcbeff]/20 backdrop-blur-sm rounded-xl  px-4 py-5 overflow-hidden text-white mx-3">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-sm font-semibold text-[#bcbeff]">{name}</h3>
                    {role && (
                        <p className="text-xs">{role}</p>
                    )}
                </div>
            </div>

            <div className="mt-2">
                <p className="font-light text-xs opacity-[0.8] leading-snug">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Card;