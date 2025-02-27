import React from 'react';

const ChatImoji = ({url}: { url: string }) => {
    return (
        <div className={'px-2 py-1 bg-[#26252A] rounded-[26px] flex gap-1 items-center'}>
            <img src={url} alt="이모지"/>
            <p className={'text-white opacity-40 text-[10px]'}>4</p>
        </div>
    );
};
export default ChatImoji;
