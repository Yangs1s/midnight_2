'use client'
import React, {Fragment} from 'react';
import UserChatBox from "@/app/chat/components/user-chat-box";
import OtherChatBox from "@/app/chat/components/other-chat-box";

import BottomOverlayPortal from "@/components/ui/BottomOverlay";
import ChatInput from "@/app/chat/components/chat-Input";

const chat_mock_data = [
    {"sender": "user", "message": "안녕, 오늘 하루 어땠어?", "time": "오전 10:30"},
    {"sender": "bot", "message": "좋았어, 너는 어땠어?", "time": "오전 10:31"},
    {"sender": "user", "message": "나도 괜찮았어. 점심은 뭐 먹었어?", "time": "오전 10:32"},
    {"sender": "bot", "message": "김치찌개를 먹었어. 아주 맛있었지!", "time": ""},
    {
        "sender": "bot", "message": "@@@ 사라있네 @@@\n" +
            "*8월 11일 일요일*\n\n강남구 대치동 890-38번지\n\n" +
            "-------------------------------\n" +
            "108 디피 a1 영우 \n" +
            "211 킹콩 ㅃ2 성근\n" +
            "207 킹콩 3 혁진\n" +
            "209 바다 1 성근\n" +
            "106 최인혁 ㅃ1\n" +
            "202 태관 ㅃ1\n" +
            "203 홍탁 ㅃ1\n" +
            "127 인성 a1 정팔\n" +
            "ㄴ.ㄱ xxxxxxxxxxxxx\n" +
            "-------------------------------\n" +
            "ㅈ.ㅁ\n" +
            "최.인혁 ㅡ 지.안\n" +
            "홍.탁 ㅡ 아.키.조.아 예.원\n" +
            "동.훈 ㅡ 수.아 1.25\n" +
            "바.다 ㅡ 리.하\n" +
            "태.관 ㅡ 이.린\n" +
            "-------------------------------\n" +
            "3.6 대기실 # 순 번 고 정 #", "time": "오전 10:33"
    },
    {"sender": "user", "message": "오, 부러워! 나도 다음에 먹어봐야겠다."},
    {"sender": "user", "message": "그리고 먹었던 곳이 어디야?"},
    {"sender": "user", "message": "가양? 아니면 합정?", "time": "오전 10:34"},
    {"sender": "bot", "message": "추천할 만한 곳이 몇 군데 있어.", "time": "오전 10:35"},
    {"sender": "bot", "message": "최근에는 가양 쪽이 인기가 많아.", "time": "오전 10:35"},
    {"sender": "user", "message": "그렇구나, 참고할게.", "time": "오전 10:36"},
    {"sender": "bot", "message": "다른 궁금한 점 있으신가?", "time": "오전 10:36", "imoji": true},
    {"sender": "user", "message": "아니, 괜찮아. 고마워!", "time": "오전 10:36", "imoji": true}
];

const ChatBody = () => {
    const [isReply, setIsReply] = React.useState(false);
    return (
        <div
            className={'min-w-[320px] max-w-[470px] top-36 h-screen mt-8  absolute w-full '}>
            <div className={'flex text-color relative opacity-30 justify-center my-6'}>
                <p className={'bg-[#1b1b1e] px-4 z-10 text-[12px]'}>2024년 09월 30일(월)</p>
                <div className={'h-[1px] bg-white w-full absolute top-[7px] opacity-30'}>&nbsp;</div>
            </div>

            <div className={'mb-4 pb-24 px-4'}>
                {
                    chat_mock_data.map((data, index) => {
                        // 첫 요소는 간격 없음, 그 외에는 이전 메시지와 sender 비교
                        const isSameSender = index > 0 && chat_mock_data[index].sender === chat_mock_data[index - 1].sender;
                        const gapClass = index === 0 ? "" : (isSameSender ? "mt-1" : "mt-3");

                        if (data.sender === "bot") {
                            const showProfile = index === 0 || chat_mock_data[index - 1].sender !== "bot";
                            return (
                                <Fragment key={index}>
                                    <div className={gapClass}>
                                        <OtherChatBox
                                            onClick={() => {
                                                setIsReply(true);
                                            }}
                                            content={data.message}
                                            showProfile={showProfile}
                                            time={data.time}
                                            imoji={data.imoji}
                                        />
                                    </div>
                                </Fragment>
                            );
                        } else {
                            return (
                                <Fragment key={index}>
                                    <div className={gapClass}>
                                        <UserChatBox
                                            content={data.message}
                                            time={data.time}
                                            imoji={data.imoji}
                                        />
                                    </div>
                                </Fragment>
                            );
                        }
                    })
                }

            </div>
            <ChatInput search={false} isReply={isReply}/>
            <BottomOverlayPortal isReply={isReply} setIsReply={setIsReply}/>
        </div>
    );
};

export default ChatBody;
