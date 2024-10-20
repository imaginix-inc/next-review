"use client";

import { useEffect } from "react";

export default function Demo1Page() {
  // 1. 完善请求
  // 2. 根据学校 / 性别进行分类并查询数据
  // 无es3、es5要求，可任意使用es6以上版本特性
  useEffect(() => {
    const fetchData = async () => {
      // /api/data
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center py-[100px] flex-col">
      <div className="font-[32px]">1. 完善请求</div>
      <div className="h-[24px]" />
      <div className="font-[32px]">2. 根据学校 / 性别进行分类并查询数据</div>
      <div className="h-[24px]" />

      {/* ------------------- */}

      <div className="h-[120px] w-[400px] border-[5px] border-[#F0F0F0] flex flex-row justify-around items-center">
        <div className="h-full py-[6px] justify-start">
          <h6 className="font-semibold">按学校分类</h6>
          {/* 示例： 点击ALL 显示所有的，点击SJSU / KCC 只显示SJSU / KCC的数据 */}
          <p onClick={() => {}}>ALL</p>
          <p onClick={() => {}}>示例: SJSU</p>
        </div>
        <div className="h-full py-[6px] justify-start">
          <h6 className="font-semibold">按性别分类</h6>
          <p onClick={() => {}}>ALL</p>
        </div>
      </div>
      {/* 渲染位置 */}
      <div className="h-[400px] w-[800px]"></div>
    </div>
  );
}
