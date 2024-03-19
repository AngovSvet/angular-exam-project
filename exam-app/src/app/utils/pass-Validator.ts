import { ValidatorFn } from "@angular/forms";

export function passwordValidator(password:string,repassword:string):ValidatorFn {

    return (control)=>{
        const passOne = control.get(password);
        const passTwo = control.get(repassword)

        return passOne?.value===passTwo?.value ? null : {missmatch:true}
        
    }
}