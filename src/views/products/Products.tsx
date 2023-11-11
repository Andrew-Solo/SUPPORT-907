import React from "react";
import {store} from "../../stores/Store";
import PageLoader from "../ui/PageLoader";
import ModelsGrid from "../models/ModelsGrid";

export default function Products() {
  const {loaded, items} = store.products;

  if (!loaded) return (<PageLoader/>);

  return (
    <ModelsGrid models={items}/>
  );
}