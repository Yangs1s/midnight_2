"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ChangeNickName from "@/app/chat/components/change-nick-name";


const ChatInput = ({ search, isReply }: { isReply: boolean, search: boolean }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [footerContent, setFooterContent] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [openSheet, setOpenSheet] = useState(-1);
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 32 + "px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };
  console.log(openSheet);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const addEmoji = (emoji: string) => {
    setMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div
      className={`fixed ${footerContent ? "min-h-[240px]" : "h-auto"}  bottom-0 bg-[#181818]  min-w-[320px] max-w-[470px] w-full `}>
      <div className={"px-4 pt-4 pb-3"}>
        {
          !search ? (
            <div className="flex gap-2 justify-between items-end">
              {/*컨텐츠 버튼*/}
              <button className={"pb-1"}>
                <div>
                  {
                    isReply ?
                      <Image src={"/icon/reply.svg"} alt={"reply"} width={24} height={24} /> :
                      <button className={"w-8 h-8 flex justify-center items-center"}
                              onClick={() => {
                                setOpenSheet(-1);
                                setFooterContent(prev => !prev);
                              }}>
                        {
                          !footerContent ?
                            <Image src="/icon/plus.svg" width={32} height={32}
                                   alt="플러스 아이콘" /> :
                            <Image src="/icon/closeIcon.svg" width={32} height={32}
                                   alt="플러스 아이콘" />}
                      </button>
                  }
                </div>
              </button>
              {
                openSheet === -1 ? (
                    <>
                      <div
                        className="relative bg-[#2F2F2F] rounded-[32px] flex items-center w-full min-h-[32px] px-4 ">
                        <div className={"w-full h-auto flex items-end"}>
                                                <textarea
                                                  ref={textareaRef}
                                                  className="box-border max-w-[200px] py-2 resize-none w-full !min-h-[0px] max-h-[120px] h-9
                                          outline-none overflow-hidden placeholder:text-[13px] bg-transparent text-[13px] leading-normal  text-[#999999]"
                                                  placeholder="조용한 크림파스타로 채팅 입력"
                                                  value={message}
                                                  onChange={handleInputChange}
                                                />
                          <button
                            onClick={toggleEmojiPicker}
                            className="absolute bottom-[6px] right-4 "
                          >
                            <img src="/icon/smileIcon.svg" alt="스마일 이모지" />
                          </button>
                          {showEmojiPicker && (
                            <div
                              className="absolute bottom-full mb-2 bg-white p-2 rounded shadow">
                              <button onClick={() => addEmoji("😊")}
                                      className="text-xl">😊
                              </button>
                              <button onClick={() => addEmoji("😂")}
                                      className="text-xl ml-2">😂
                              </button>
                              <button onClick={() => addEmoji("😍")}
                                      className="text-xl ml-2">😍
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <button className={"pb-1"}>
                        <Image width={32} height={32} src="/icon/send.svg" alt="전송 아이콘" />
                      </button>
                    </>
                  ) :
                  openSheet === 0 ? (
                    <>
                      <div className={"pb-2"}>프로필선택</div>

                    </>
                  ) : openSheet === 1 ? (
                    <>
                      <div className={"pb-2"}>앨범</div>

                    </>
                  ) : <>
                    <div className={"pb-2"}>자주쓰는 문구</div>

                  </>
              }

              {/*전송 버튼*/}
              {
                openSheet !== -1 &&
                <div className={"w-[24px]"}>&nbsp;</div>
              }
            </div>

          ) : (

            <div className={"w-full ml-auto flex items-center justify-end h-full "}>
              <div className="flex gap-1 items-center">
                <Image width={24} height={24} src="/icon/upIcon.svg" alt="전송 아이콘" />
                <Image width={24} height={24} src="/icon/downIcon.svg" alt="전송 아이콘" />
              </div>
            </div>
          )
        }
      </div>
      {
        footerContent && openSheet === -1 && <div className={"min-h-[280px] h-full "}>
          <div
            className={" border-t-[1px] border-t-white/30  h-full"}>
            <div className={"px-4 flex items-center py-3 justify-between w-full"}>
              <p className={"text-[14px]"}>남은 채팅 수 <em className={"text-[#BB94FF]"}>20</em></p>
              <Image width={24} height={24} src="/icon/dragDrop.svg" alt="전송 아이콘" />
            </div>
            <ul className={"flex items-center justify-around w-full  py-5 px-4"}>
              <li className={"flex flex-col cursor-pointer items-center gap-2 "} onClick={() => {
                setOpenSheet(0);
              }}>
                <Image width={24} height={24} src="/icon/userIcon.svg" alt="전송 아이콘" />
                <p className={"text-[14px]"}>닉네임 변경</p>
              </li>
              <li className={"flex flex-col cursor-pointer items-center gap-2 "} onClick={() => {
                setOpenSheet(1);
              }}>
                <Image width={24} height={24} src="/icon/picture.svg" alt="전송 아이콘" />
                <p className={"text-[14px]"}>사진첨부</p>
              </li>
              <li className={"flex flex-col cursor-pointer items-center gap-2 "} onClick={() => {
                setOpenSheet(2);
              }}>
                <Image width={24} height={24} src="/icon/pencil.svg" alt="전송 아이콘" />
                <p className={"text-[14px]"}>자주쓰는 문구</p>
              </li>
            </ul>
          </div>
        </div>
      }
      {
        openSheet === 0 && <ChangeNickName />
      }

    </div>
  );
};

export default ChatInput;
