import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any,searchType:string) {
        if(value.length==0){
            return value;
        }

        let emparr:any[]=[];
        for(let i=0;i<value.length;i++){
            let name:string=value[i].name;
            let department:string=value[i].departmentit;
            if(name.toLowerCase().indexOf(searchType.toLowerCase())>-1){
                emparr.push(value[i])
            }else if(department.toLowerCase().indexOf(searchType.toLowerCase())>-1){
                emparr.push(value[i]);

            }else if(value[i].country.cname.toLowerCase().indexOf(searchType.toLowerCase())>-1){
                emparr.push(value[i]);
            }
        }

        return emparr;
         

    }

}