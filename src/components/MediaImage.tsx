import type { ImgHTMLAttributes } from 'react';
import data from '@data/media.json';
type Media = {width:number; height:number; variants:{src:string;width:number}[]};
const media = data as Record<string,Media>;
export const assetUrl=(src:string)=>`${import.meta.env.BASE_URL}${src.replace(/^\//,'')}`;
export const fullImage=(src:string)=>assetUrl(media[src]?.variants.slice(-1)[0]?.src || src);
export function MediaImage({src='',alt='',sizes='(max-width: 767px) 100vw, 90vw',...props}:ImgHTMLAttributes<HTMLImageElement>){
  const item=media[src];
  if(!item)return <img src={assetUrl(src)} alt={alt} {...props}/>;
  return <img src={assetUrl(item.variants.find(v=>v.width>=1600)?.src||item.variants.slice(-1)[0].src)} srcSet={item.variants.map(v=>`${assetUrl(v.src)} ${v.width}w`).join(', ')} sizes={sizes} width={item.width} height={item.height} alt={alt} decoding="async" {...props}/>;
}
