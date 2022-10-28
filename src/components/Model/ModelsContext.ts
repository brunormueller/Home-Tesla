import React, { ReactNode } from "react";

export interface CarModel{
    modelName: string
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel: (model: CarModel) => void
    unregisteredModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
}


export default React.createContext<ModelContext>
({} as ModelContext)