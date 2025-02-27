'use client'
import React, {Dispatch, SetStateAction, useState} from 'react';
import {createPortal} from 'react-dom';
import Image from "next/image";
import {motion, AnimatePresence} from 'framer-motion';

const BottomOverlay = ({
                           isReply, setIsReply,
                       }: { isReply: boolean, setIsReply: Dispatch<SetStateAction<boolean>> }) => {


    const handleClose = () => {
        setIsReply(false);
    }
    return (
        <AnimatePresence>
            {
                (isReply) &&
                <div
                    className="bg-[#2D2D2D]  z-40 fixed bottom-20 left-0 w-full flex items-center justify-between h-[48px] px-4">
                    <motion.div
                        initial={{opacity: 0,}}
                        animate={{opacity: 1,}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.1}}
                        className="bg-[#2D2D2D] z-40 fixed bottom-20 left-0 w-full flex items-center justify-between h-[48px] px-4"
                    >
                        <div className={'flex gap-2 w-full items-center'}>
                            <div className="bg-white rounded-full w-[24px] h-[24px]">&nbsp;</div>
                            <div className={'flex flex-col'}>
                                <p className={'text-[12px] text-[#bb94ff]'}>키작은 판다</p>
                                <p className="w-fit text-[12px]">안녕하세요</p>
                            </div>
                        </div>
                        <button onClick={handleClose}>
                            <Image src="/icon/xIcon.svg" alt="닫기" width={24} height={24}/>
                        </button>
                    </motion.div>
                </div>}
        </AnimatePresence>
    );
};

const BottomOverlayPortal = ({
                                 isReply, setIsReply,
                             }: { isReply: boolean, setIsReply: Dispatch<SetStateAction<boolean>> }) => {
    if (typeof document === 'undefined') return null;
    return createPortal(<BottomOverlay isReply={isReply} setIsReply={setIsReply}/>, document.body);
};

export default BottomOverlayPortal;
