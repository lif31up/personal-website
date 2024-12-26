import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";
import React, { useEffect, useState } from "react";

export function CommonComp({ className }: DefaultProps<never>) {
  // tailname area
  const tailName: TailProperties = {
    box: "w-24 h-24  md:w-16 md:h-16",
    layout: "flex",
  };
  // html area
  return <div className={`${cn(tailName)} ${className}`}></div>;
} // CommonComp

type DataCompDataType = { age: number; name: string };
export function DataComp({ data, className }: DefaultProps<DataCompDataType>) {
  // data area
  if (!data) return <></>;
  const { age, name }: DataCompDataType = data;
  const tailName: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  };

  return (
    <h1
      className={`${cn(tailName)} ${className}`}
    >{`age: ${age}\nname: ${name}`}</h1>
  );
} // DataComp

export function ClickComp({ id, onClick, className }: DefaultProps<never>) {
  // prop area
  if (!onClick || !id) return <></>;

  // click area
  const clickHandler = (): void => {
    onClick(id);
  };
  const tailName: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  };

  return (
    <button className={`${cn(tailName)} ${className}`} onClick={clickHandler}>
      button
    </button>
  );
} // ClickComp

export function FetchingComp(): React.ReactNode {
  const [data, setData] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      });
  }, []);

  if (load) return <></>;
  return <DataComp data={data} />;
} // FetchingComp

type DataProviderRenderType = {
  render: (data: DataCompDataType) => {};
}; // DataProviderRenderType

const DataProvider = ({ render }: DataProviderRenderType) => {
  const [data, setData] = useState<DataCompDataType | null>(null);
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      });
  }, []);

  if (load || data === null) return <></>;
  return render(data);
}; // DataProvider
export const DataContainer = () => {
  const renderer = (data: DataCompDataType) => <DataComp data={data} />;
  return DataProvider({ render: renderer });
}; // DataContainer
