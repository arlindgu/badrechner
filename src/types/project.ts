export type projectType = {
    name: string;
    newBuild: boolean;
    needsBathroomAge?: boolean;
    bathroomAgeOptions?: ageType[];
}

export type ageType = {
    name: string;
    newerThan: boolean;
    pricefactor?: number;
}