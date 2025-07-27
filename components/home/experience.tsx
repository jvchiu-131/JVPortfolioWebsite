import {Card, CardHeader, CardFooter, CardBody} from "@heroui/card"



const ExperienceSection = () => {

    const ExperienceCard = () => {
        return(
            <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 max-w-2xl"
                    shadow="sm"
                    >
                    <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          
                        this is writing
            
            
          
                        </div>
                    </CardBody>
                </Card>
        )
    }


    return (
        <section className="flex flex-col justify-center items-center border-2 max-w-screen max-h-screen">
            <div>
                Professional Experience
            </div>
            
            <div>
                 <ExperienceCard/>
            </div>
        </section>
    )
}

export default ExperienceSection