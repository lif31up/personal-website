export default interface TailProperties {
  position?: string;
  box?: string;
  layout?: string;
  typo?: string;
  bg_border?: string;
  anime_transit?: string;
  transform?: string;
  interact?: string;
  etc?: string;
}

export function cn(properties: TailProperties): string {
  return `${properties.position ?? properties.position} ${
    properties.bg_border ?? properties.bg_border
  } ${properties.box ?? properties.box} ${
    properties.layout ?? properties.layout
  } ${properties.typo ?? properties.typo} ${
    properties.anime_transit ?? properties.anime_transit
  } ${properties.transform ?? properties.transform} ${
    properties.interact ?? properties.interact
  } ${properties.etc ?? properties.etc}`;
}
