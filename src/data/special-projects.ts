import data from './design-projects.json';
export interface SpecialProject {
 id:string; title:string; category:string; shortDesc:string; description:string; cover:string; tags:string[]; date:string; client:string; role:string; tools:string[];
 sections: {background?:string;challenge?:string;solution?:string;result?:string}; gallery:string[]; processImages:string[];
 video?:string|null; specs?:string[][]; decks?:{label:string;image:string}[]; posters?:string[]; featureImages?:string[];
}
export const specialProjects:SpecialProject[]=data;
export const getSpecialProjectById=(id:string)=>specialProjects.find(p=>p.id===id);
export const getAdjacentProjects=(id:string)=>{const i=specialProjects.findIndex(p=>p.id===id);return {prev:i>0?specialProjects[i-1]:null,next:i>=0?specialProjects[i+1]??null:null};};
