import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRoute, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
         currentRoute: ActivatedRoute,
         currentState: RouterStateSnapshot,
         nextState?: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
     }

}

