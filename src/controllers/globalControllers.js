import projectConstructor from "../models/project-model";
import lectureConstructor from "../models/lecture-model";
import fundingConstructor from "../models/funding-model";

const pageTitle=[
    "추천 포트폴리오",
    "포트폴리오 검색"
]
export const reccomendationsFeed=async(req,res)=>{
    const projectConstructors=await projectConstructor.find({}).sort({created:"desc"});
    const lectureConstructors=await lectureConstructor.find({}).sort({created:"desc"});
    const fundingConstructors=await fundingConstructor.find({}).sort({created:"desc"});

    return res.render("global-feed", {
        projectConstructors,
        lectureConstructors,
        fundingConstructors,
        pageTitle: pageTitle[0]
    });
}
export const globalSearchGet=(req,res)=>{

    return res.render("global-search", {
        pageTitle: pageTitle[1],
    });
}
