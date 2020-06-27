export const setBlinkyDegree = (degree: number) => {
    return{
        type: "setBlinkyDegree",
        payload: {degree},
    }
}