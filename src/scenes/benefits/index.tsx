import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/type";
import { HomeModernIcon, 
        UserGroupIcon, 
        AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits:Array<BenefitType> = [
    { 
        icon: <UserGroupIcon className="h-6 w-6"/>, 
        title: "100 of Diverse Classes", 
        description: 
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas nostrum! Quae praesentium molestiae quisquam maxime, dolorem in exercitationem repellendus."
    },
    { 
        icon: <AcademicCapIcon className="h-6 w-6"/>, 
        title: "Expert and Pro Trainers", 
        description: 
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas nostrum! Quae praesentium molestiae quisquam maxime, dolorem in exercitationem repellendus."
    },
    { 
        icon: <HomeModernIcon className="h-6 w-6"/>, 
        title: "State of the Art Facilities", 
        description: 
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas nostrum! Quae praesentium molestiae quisquam maxime, dolorem in exercitationem repellendus."
    },
]


const container = { 
    hidden: {},
    visible:{ 
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage}: Props ) => {
  return (
   <section 
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
  >

    <motion.div
        onViewportEnter = {()=> setSelectedPage(SelectedPage.Benefits)}
        >
            <motion.div
                initial= "hidden"
                whileInView= "visible"
                viewport= {{ once: true, amount: 0.5 }}
                transition={{ duration:0.5 }}
                variants ={{ hidden: { opacity: 0, x: -50},
                        visible:{opacity:1, x:0}
                    }}
                className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText> 
                <p className="my-5 text-sm">
                    We provide world class fitness equipment , trainers and classes to 
                    get you to your ultimate fitness goals with ease. We provide true care into each and every member</p>           
            </motion.div>
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport = {{ once:true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map(( benefit:BenefitType )=>(
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description = {benefit.description}
                        setSelectedPage={setSelectedPage}
                        />
                ))}
            </motion.div>
            {/* grapics and description */}

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* grapic */}
                <img src={BenefitsPageGraphic} alt="benefit-page-graphic"
                className="mx-auto" />
                {/* description */}

                <div>
                    {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once:true, amount:0.5 }}
                                    transition= {{ duration: 0.5}}
                                    variants={{ 
                                        hidden: {opacity:0, x:50}, 
                                        visible: { opacity:1, x: 0}
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                    {/* description */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport= {{ once: true, amount:0.5 }}
                                transition= {{ delay:0.2, duration: 0.5}}
                                variants={{
                                    hidden: { opacity:0, x:50 },
                                    visible:{ opacity:1, x:0}
                                }}
                                >
                                <p className="my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque assumenda molestiae facere tenetur dolorum, ea officia placeat, nostrum omnis possimus perferendis distinctio eaque eligendi voluptatum ullam tempora, inventore pariatur commodi quisquam quia nulla magni quae. Corporis magnam eos quae?
                                </p>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui iusto tempora earum illo minima dignissimos suscipit, doloremque, quisquam culpa ipsa velit aliquam doloribus autem sed magni, ut id. Quam illo magni architecto dignissimos incidunt aliquam aperiam libero iusto accusamus!
                                </p>
                            </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectectPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
  </section>
)
}


export default Benefits