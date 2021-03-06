import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Text, Row, Button } from '@nextui-org/react'

function OldContentCard ({title, description, imgUrl}) {
    return (
        <Fragment>
            <div className="container flex flex-col rounded-lg align-middle shadow-2xl mx-auto justify-center xl:justify-start w-full md:w-[500px]">
                <img src={imgUrl} className="w-full h-[300px] object-cover rounded-t-lg" alt="" />
                <div className="container rounded-b-lg flex flex-col align-bottom justify-center p-10">
                    <div className="container flex flex-row align-middle justify-start mb-5">
                        <FontAwesomeIcon icon={faAddressBook} className="h-[32px] text-black" />
                        <p className="text-xl sm:text-2xl font-bold text-black mx-4">{title}</p>
                    </div>
                    <p className="text-left font-medium text-base text-slate-600">{description}</p>
                    <p className="text-sm text-slate-400 font-normal mt-3">Founders of PhotoBytes Studios</p>
                </div>
            </div>
        </Fragment>
    )
}

function NewContentCard ({title, description, imgUrl}) {
    return (
        <Fragment>
            <Card cover css={{ w: '500px' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                    <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                    >
                    New
                    </Text>
                    <Text h3 color="black">
                    Acme camera
                    </Text>
                </Col>
                </Card.Header>
                <Card.Body>
                <Card.Image
                    src={imgUrl}
                    height={400}
                    width="100%"
                    className="brightness-75"
                    alt="Card example background"
                />
                </Card.Body>
                <Card.Footer             
                blur
                css={{
                    position: 'absolute',
                    bgBlur: '#ffffff',
                    borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                    bottom: 0,
                    zIndex: 1
                }}
                >
                <Row>
                    <Col>
                    <Text color="#000" size={12}>Available soon.</Text>
                    <Text color="#000" size={12}>Get notified.</Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                        <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                            Notify Me
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default function Content () {
    return (
        <Fragment>
            <div className="container p-10 flex flex-col xl:flex-row align-middle justify-center my-5 min-w-full">
                <div className="container flex flex-col align-middle justify-center p-5 w-auto xl:w-[50%]">
                    <OldContentCard title="PhotoBytes Studios" description="PhotoBytes Studios is a fairly new company and we are looking forward to its progress in the near future." imgUrl="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="container flex flex-col align-middle justify-center p-5 w-full xl:w-[50%]">
                    <div className="container min-w-full xl:w-[500px] xl:min-w-min">
                        <h1 className="font-extrabold text-center mx-auto xl:mx-0 xl:text-left text-4xl mb-5 italic">The beginnings of PhotoBytes Studios</h1>
                        <p className="font-medium text-base text-slate-500 mb-3">Most of the successful organizations and companies of the world were started from humble beginnings. From nothing, they rose to success. We at PhotoBytes Studios are trying to make this company successful as well. It&apos;s sad that we are still waiting to receive our first order but we believe that once we do, success will be ours too. </p>
                        <p className="font-medium text-base text-slate-500 mb-3">PhotoBytes Studios was formed in the midst of 2020, when the COVID-19 pandemic was raging throughout the world. During the pandemic, two students wanted to use their time wisely instead of wasting it. They were <a href="https://www.facebook.com/mahmud.almuhaimin.90/" className="underline text-slate-500">Mahmud Al Muhaimin</a> and <a href="https://www.facebook.com/adib.azwad.999" className="underline text-slate-500">Adib Azwad</a> , the founders of PhotoBytes Studios. They decided to learn the basics of Graphics Design, Motion Graphics and Web Development to provide this skill to other people as a paid service. So, they decided to form PhotoBytes Studios.</p>
                        <p className="font-medium text-base text-slate-500 mb-3">Right now, Photobytes Studios barely deserves the title to be a company as we are yet to make our first sale but the hopes are high. As the world becomes more and more dependent on the internet and IT, the demand for digital products will steadily increase, so will the progression of this company through the tunnels of success.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
