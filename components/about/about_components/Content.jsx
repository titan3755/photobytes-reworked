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
                        <FontAwesomeIcon icon={faAddressBook} style={{color: 'black', fontSize: '32px'}} />
                        <p className="text-xl sm:text-2xl font-bold text-black mx-4">{title}</p>
                    </div>
                    <p className="text-left font-medium text-base text-slate-600">{description}</p>
                    <p className="text-sm text-slate-400 font-normal mt-3">Adipisicing elit. Ad, provident.</p>
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
                    <OldContentCard title="PhotoBytes Studios" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque diam magna, vel sollicitu" imgUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
                <div className="container flex flex-col align-middle justify-center p-5 w-full xl:w-[50%]">
                    <div className="container min-w-full xl:w-[500px] xl:min-w-min">
                        <h1 className="font-extrabold text-center mx-auto xl:mx-0 xl:text-left text-4xl mb-5">Lorem ipsum dolor sit amet</h1>
                        <p className="font-medium text-base text-slate-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus pariatur, eius at necessitatibus sed harum qui blanditiis molestias ipsa recusandae, nemo minima ipsam quidem facere exercitationem ducimus impedit atque alias!</p>
                        <p className="font-medium text-base text-slate-500 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum incidunt possimus maiores harum, quisquam, id, hic alias animi nihil eaque assumenda consequatur nobis ullam dolores itaque expedita sequi perspiciatis repudiandae voluptate modi beatae voluptatum? Consequatur.</p>
                        <p className="font-medium text-base text-slate-500 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, itaque. Nulla eos enim impedit iusto itaque consequatur modi? Assumenda in illo aspernatur ad nemo hic quae voluptatem dolore, explicabo officiis provident similique iste, magni sint.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}