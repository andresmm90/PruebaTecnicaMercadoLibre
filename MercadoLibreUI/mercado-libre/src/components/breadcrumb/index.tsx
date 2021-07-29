import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import IBreadcrump from "./model/Breadcrump";
import "./index.scss";

function Breadcrumbs(items:Array<IBreadcrump>) { 
    return <div>
            <Breadcrumb tag="nav" listTag="div">
                {items.map(x=><BreadcrumbItem tag={x.active?"span":"a"} active={x.active} href={!x.active?x.href:null}>{x.text}</BreadcrumbItem>)}
            </Breadcrumb>
        </div>
}

  
export default Breadcrumbs;
  