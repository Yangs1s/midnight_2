import ChatHeader from "@/app/chat/components/chat-header";
import ChatBody from "@/app/chat/components/chat-body";
import ChatInput from "@/app/chat/components/chat-Input";

type Props = {
    params: {
        id: string;
    };
};

export default function Page({params}: Props) {
    const {id} = params;
    // const response = await getChatInfo(id);

    const response = {
        title: "타이틀 들어갑니다. 타이틀이 길어지면 짤립니다.",
        description: "디스크립션 들어갑니다. 디스크립션이 길어지면 짤립니다.",
        // imageUrl: "/images.jpeg",
        content:
            {
                top: <div className={'flex items-center gap-2'}>
                    <span className={'bg-[#985CFF] px-[6px] py-1 rounded-[4px]'}>초중 20이상</span>
                    <p>오전 <rect className={'text-[#BB94FF]'}>02:58 </rect>기준</p>
                </div>,
                detail: <div>가능?</div>
            }
    };

    console.log(id);

    return (
        <div className={'flex flex-col h-full min-w-[320px] max-w-[470px]'}>
            <ChatHeader
                title={response.title}
                description={response.description}
                // imageUrl={response.imageUrl}
                content={response.content}
            />
            <ChatBody/>
            {/*<ChatInput search={false} isReply={false}/>/*/}
        </div>
    );
}
