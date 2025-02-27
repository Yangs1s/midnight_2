import React from 'react';
import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";

const ChangeNickName = () => {
    return (
        <div className={'px-4 pb-1'}>
            <ul className={' w-full flex flex-col gap-2 py-4'}>
                <li className={'flex items-center w-full justify-between p-2'}>
                    <div className={'flex gap-[10px] items-center'}>
                        <div className={'w-10 h-10 rounded-full bg-white'}></div>
                        <p>고정 닉네</p>
                    </div>
                    {/*TODO 이거 다른거로 바꾸던가 해야겠음 디자인 시안대로 만들기가 힘듭니다.*/}
                    <Checkbox
                        className={`rounded-full w-6  h-6 border-[#2F2F32] data-[state=unchecked]:before:text-[#2F2F32] data-[state=unchecked]:before:content-['✔']  data-[state=unchecked]:before:text-[13px]  data-[state=unchecked]:before:font-bold data-[state=unchecked]:text-primary-foreground  data-[state=checked]:before:content-[]  data-[state=checked]:before:bg-primary data-[state=checked]:text-primary-white data-[state=checked]:pl-[3px]`}/>
                </li>
                <li className={'flex items-center w-full justify-between border-[1px] border-primary p-2 rounded-[12px]'}>
                    <div className={'flex gap-[10px] items-center'}>
                        <div className={'w-10 h-10 rounded-full bg-white'}></div>
                        <p>고정 닉네</p>
                    </div>
                    <div className={'flex gap-4 '}>
                        <div
                            className={'flex gap-[2px] text-[11px] bg-[#414141] px-[5px] py-1 rounded-[24px] items-center'}>
                            <Image src={'/icon/return.svg'} alt={'리턴'} width={18} height={18}/>
                            <p>
                                랜덤
                            </p>
                        </div>
                        {/*TODO 이거 다른거로 바꾸던가 해야겠음 디자인 시안대로 만들기가 힘듭니다.*/}
                        <Checkbox
                            className={`rounded-full  w-6 h-6 border-[#2F2F32] data-[state=unchecked]:before:text-[#2F2F32] data-[state=unchecked]:before:content-['✔']  data-[state=unchecked]:before:text-[13px]  data-[state=unchecked]:before:font-bold data-[state=unchecked]:text-primary-foreground  data-[state=checked]:before:content-[]  data-[state=checked]:before:bg-primary data-[state=checked]:text-primary-white data-[state=checked]:pl-[3px]`}/>
                    </div>
                </li>
                <li className={'flex gap-2 py-3 justify-center'}>
                    <Image src={'/icon/plusIcon.svg'} alt={'새프로필'} width={18} height={18}/>
                    <p>새 프로필 만들기</p>
                </li>
            </ul>

            <button className={'w-full h-[48px] bg-primary rounded-[4px]'}>
                변경완료
            </button>
        </div>
    );
};

export default ChangeNickName;
