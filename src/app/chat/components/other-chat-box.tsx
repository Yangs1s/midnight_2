import React from 'react';
import ChatImoji from "@/app/chat/components/chat-imoji";


const OtherChatBox = ({content, showProfile, time, imoji, onClick}: {
    content: string,
    showProfile?: boolean,
    time?: string,
    imoji?: boolean
    onClick: () => void
}) => {
    return (
        <div role={'presentation'} onClick={onClick} className={'flex w-full gap-2 mr-auto'}>
            <div className={'flex flex-col justify-center gap-1'}>
                {/*    profile */}
                {
                    showProfile &&
                    <div className={'flex gap-1 items-center'}>
                        <img className={'w-[28px] h-[28px]'} src={'/icon/sampleProfile.svg'} alt={'샘플'}/>
                        <p className={'text-[14px]'}>신사동 장원영</p>
                    </div>
                }
                <div className={'flex flex-col gap-1 ml-7'}>
                    <div className={'flex gap-2'}>
                        <div className={'bg-[#3E3E42]  max-w-[248px] p-3 rounded-b-[8px] rounded-tr-[8px] text-[14px]'}>
                            <p>
                                {content}
                            </p>
                        </div>
                        {time && (
                            <div className={'flex text-[10px] opacity-40 mt-auto'}>
                                <p>오전 10:38</p>
                                <img src={'/icon/threedot.svg'}/>
                            </div>
                        )}
                    </div>
                    {
                        imoji &&
                        <div className={'flex gap-1'}>
                            <ChatImoji url={'/icon/heartImoji.svg'}/>
                            <ChatImoji url={'/icon/smileImoji.svg'}/>
                        </div>
                    }
                </div>


            </div>

        </div>
    );
};

export default OtherChatBox;
