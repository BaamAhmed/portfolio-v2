import {motion} from 'framer-motion'
function About(){
    function handleClick() {
        console.log('hello')
    }
    return (
        <>
            <div className="grid grid-cols-2 min-h-screen ">
                <div className="flex justify-center p-10 flex-col">
                    <h1 className="text-6xl font-semibold mb-6">about</h1>
                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sint? Obcaecati voluptas adipisci laborum sequi ipsam saepe consequatur voluptatem impedit temporibus quis molestias iusto consequuntur, vitae in inventore necessitatibus doloremque.</p>
                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sint? Obcaecati voluptas adipisci laborum sequi ipsam saepe consequatur voluptatem impedit temporibus quis molestias iusto consequuntur, vitae in inventore necessitatibus doloremque.</p>

                </div>
                <div className='flex justify-center items-center p-20'>
                    <img src="/pic.jpg" className='rounded-xl drop-shadow-xl' alt="" />
                </div>
            </div>
            <div className=" flex items-end justify-end">
                <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                        opacity={0.7}
                        animate={{
                            d: [
                                "M26.6,-50.8C35.8,-40.9,45.3,-36.2,53.4,-28.7C61.5,-21.1,68.2,-10.5,73,2.7C77.7,16,80.5,32,75.9,45.8C71.3,59.5,59.4,70.9,45.6,77.8C31.7,84.7,15.8,87.1,1.1,85.2C-13.6,83.3,-27.2,77,-38.2,68.4C-49.2,59.8,-57.5,48.9,-64.1,37.1C-70.6,25.3,-75.5,12.7,-76,-0.3C-76.5,-13.2,-72.7,-26.5,-65.9,-37.9C-59.1,-49.3,-49.3,-58.9,-37.8,-67.5C-26.4,-76.1,-13.2,-83.7,-2.2,-79.9C8.8,-76,17.5,-60.8,26.6,-50.8Z" ,
                                "M37,-60C49.3,-57,61.6,-49.8,66,-39.1C70.4,-28.4,67,-14.2,66.2,-0.4C65.4,13.3,67.3,26.6,59.9,32.1C52.4,37.5,35.6,35.1,24.1,40.1C12.6,45.2,6.3,57.7,-3.2,63.3C-12.7,68.8,-25.4,67.4,-30.9,58.9C-36.4,50.4,-34.7,34.7,-41.7,23.7C-48.7,12.7,-64.3,6.4,-66.8,-1.5C-69.3,-9.3,-58.7,-18.5,-50,-26.5C-41.3,-34.4,-34.4,-41,-26.4,-46.4C-18.3,-51.9,-9.2,-56.1,1.6,-58.9C12.4,-61.6,24.7,-62.9,37,-60Z",
                                "M30.1,-52.3C35.6,-48.9,34.3,-34,42.8,-23.4C51.4,-12.7,69.7,-6.4,72.3,1.6C75,9.5,62.1,18.9,53.8,29.8C45.4,40.7,41.5,53,33.3,63.4C25.1,73.8,12.6,82.2,1,80.4C-10.5,78.6,-21,66.6,-33.8,58.9C-46.6,51.2,-61.6,47.7,-69.3,38.6C-76.9,29.5,-77,14.8,-74.4,1.5C-71.7,-11.7,-66.2,-23.4,-59.9,-34.7C-53.5,-46,-46.4,-57,-36.3,-57.8C-26.2,-58.6,-13.1,-49.3,-0.4,-48.6C12.3,-47.9,24.5,-55.8,30.1,-52.3Z",
                                "M38.7,-62.7C52.6,-58.9,68.3,-53.7,70,-43C71.7,-32.3,59.5,-16.1,57.8,-1C56.1,14.2,64.8,28.3,61.4,36.1C58,43.8,42.5,45.2,30.2,46.6C17.9,47.9,9,49.2,0.4,48.5C-8.1,47.8,-16.3,45,-24.9,41.6C-33.5,38.1,-42.7,34,-55.1,27C-67.4,20,-83,10,-83.9,-0.5C-84.8,-11,-71,-22,-59.5,-30.5C-48,-39,-38.7,-45,-29.2,-51.4C-19.6,-57.8,-9.8,-64.7,1.3,-66.8C12.3,-69,24.7,-66.6,38.7,-62.7Z"
                            ]
                        }}
                        transition={{
                            ease:'easeOut', 
                            duration: 10,
                            repeat: Infinity,
                            repeatType: 'reverse'}}
                        fill="#6F81FF" 
                        d="M26.6,-50.8C35.8,-40.9,45.3,-36.2,53.4,-28.7C61.5,-21.1,68.2,-10.5,73,2.7C77.7,16,80.5,32,75.9,45.8C71.3,59.5,59.4,70.9,45.6,77.8C31.7,84.7,15.8,87.1,1.1,85.2C-13.6,83.3,-27.2,77,-38.2,68.4C-49.2,59.8,-57.5,48.9,-64.1,37.1C-70.6,25.3,-75.5,12.7,-76,-0.3C-76.5,-13.2,-72.7,-26.5,-65.9,-37.9C-59.1,-49.3,-49.3,-58.9,-37.8,-67.5C-26.4,-76.1,-13.2,-83.7,-2.2,-79.9C8.8,-76,17.5,-60.8,26.6,-50.8Z" 
                        transform="translate(200, 200), scale(0.8)" />
                </svg>
                <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        opacity={0.7} 
                        animate={{
                            d: [
                                "M35.6,-68C43.5,-57,45.5,-42.2,45.5,-30.3C45.5,-18.3,43.4,-9.2,44,0.3C44.5,9.8,47.7,19.6,48,32.1C48.4,44.6,45.9,59.9,37.4,67.8C28.9,75.6,14.5,76.1,0.5,75.2C-13.4,74.3,-26.8,72,-34.1,63.4C-41.4,54.9,-42.5,40,-49.6,28.4C-56.7,16.8,-69.7,8.4,-74.5,-2.8C-79.4,-14,-75.9,-27.9,-68.4,-38.8C-60.9,-49.6,-49.2,-57.3,-37.1,-65.9C-25,-74.5,-12.5,-84,0.6,-85.1C13.8,-86.3,27.6,-79,35.6,-68Z",
                                "M29.9,-49C39.3,-46.3,48,-39.5,58.4,-30.6C68.8,-21.8,81.1,-10.9,81.7,0.4C82.4,11.7,71.5,23.3,60.7,31.5C49.9,39.7,39.2,44.5,29.1,45.6C19,46.7,9.5,44.1,-1.3,46.4C-12.1,48.7,-24.2,55.8,-34.5,54.8C-44.8,53.9,-53.4,44.8,-56.3,34.3C-59.2,23.8,-56.4,11.9,-57.7,-0.7C-58.9,-13.3,-64,-26.6,-61.3,-37.3C-58.5,-48,-47.8,-56.1,-36.2,-57.6C-24.7,-59.1,-12.4,-53.9,-1.1,-52.1C10.2,-50.2,20.4,-51.7,29.9,-49Z",
                                "M44,-70.1C55,-69.9,60.5,-54,58.9,-39.7C57.2,-25.4,48.4,-12.7,50.9,1.4C53.4,15.6,67.1,31.1,66.3,41.2C65.5,51.2,50.1,55.7,36.6,63.6C23.2,71.4,11.6,82.7,-0.2,83.1C-12,83.4,-24,72.8,-35,63.5C-46.1,54.3,-56.2,46.3,-59.9,35.9C-63.5,25.6,-60.6,12.8,-62,-0.8C-63.3,-14.4,-69,-28.7,-66.7,-41.4C-64.4,-54,-54.1,-64.9,-41.6,-64.3C-29.2,-63.7,-14.6,-51.5,1,-53.2C16.5,-54.9,33,-70.3,44,-70.1Z",
                                "M28.1,-49.8C35.2,-44.7,38.6,-34.5,47.4,-25.4C56.2,-16.2,70.4,-8.1,77,3.8C83.7,15.8,82.9,31.6,76.2,44.5C69.6,57.4,57.2,67.4,43.5,66.7C29.8,65.9,14.9,54.2,0.2,53.9C-14.5,53.6,-29.1,64.6,-37.7,62.4C-46.3,60.3,-48.9,45,-48.8,32.4C-48.7,19.8,-45.9,9.9,-51.6,-3.3C-57.3,-16.5,-71.5,-33,-71.2,-44.9C-70.9,-56.9,-56.2,-64.3,-41.9,-65.3C-27.6,-66.2,-13.8,-60.6,-1.6,-57.8C10.6,-55,21.1,-54.9,28.1,-49.8Z"
                            ]
                        }}
                        transition={{
                            ease:'easeOut', 
                            duration: 10,
                            repeat: Infinity,
                            repeatType: 'reverse'}}
                        fill="#FBFE5E" 
                        d="M26.6,-50.8C35.8,-40.9,45.3,-36.2,53.4,-28.7C61.5,-21.1,68.2,-10.5,73,2.7C77.7,16,80.5,32,75.9,45.8C71.3,59.5,59.4,70.9,45.6,77.8C31.7,84.7,15.8,87.1,1.1,85.2C-13.6,83.3,-27.2,77,-38.2,68.4C-49.2,59.8,-57.5,48.9,-64.1,37.1C-70.6,25.3,-75.5,12.7,-76,-0.3C-76.5,-13.2,-72.7,-26.5,-65.9,-37.9C-59.1,-49.3,-49.3,-58.9,-37.8,-67.5C-26.4,-76.1,-13.2,-83.7,-2.2,-79.9C8.8,-76,17.5,-60.8,26.6,-50.8Z" 
                        transform="translate(160, 220), scale(0.7)" />
                </svg>
                <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        opacity={0.7} 
                        animate={{
                            d: [
                                "M37.2,-61.8C45,-59.9,46,-43.5,47,-30.8C47.9,-18.1,48.8,-9,54.4,3.2C59.9,15.4,70,30.8,69.9,45C69.7,59.2,59.4,72.2,46.1,74.3C32.8,76.5,16.4,67.9,1,66.2C-14.4,64.5,-28.8,69.7,-36.9,64.4C-44.9,59.2,-46.7,43.6,-47.1,31.1C-47.6,18.6,-46.8,9.3,-48.5,-1C-50.2,-11.3,-54.5,-22.6,-50,-28.1C-45.5,-33.6,-32.3,-33.4,-22.6,-34.2C-12.8,-35,-6.4,-36.8,4.1,-44C14.7,-51.2,29.4,-63.7,37.2,-61.8Z",
                                "M31.5,-60.1C39.3,-50.1,43,-38.5,43.8,-28.3C44.7,-18,42.6,-9,43.8,0.7C45,10.3,49.4,20.7,48.4,30.7C47.4,40.7,41,50.3,32,52.5C23.1,54.6,11.5,49.2,-0.8,50.7C-13.2,52.2,-26.5,60.5,-32.1,56.4C-37.7,52.3,-35.8,35.9,-42.3,24.5C-48.9,13,-63.9,6.5,-69.2,-3C-74.4,-12.5,-69.8,-25.1,-61.6,-33.6C-53.3,-42.2,-41.5,-46.8,-30.7,-55C-19.8,-63.2,-9.9,-75.1,1,-76.8C11.9,-78.5,23.8,-70.1,31.5,-60.1Z",
                                "M33.7,-64.4C39.2,-55.3,36,-37.1,37.8,-24.9C39.6,-12.6,46.4,-6.3,54.3,4.6C62.2,15.4,71.2,30.9,68.7,42C66.3,53,52.3,59.8,39,68.7C25.6,77.7,12.8,88.8,1.8,85.6C-9.1,82.5,-18.3,65,-32.4,56.5C-46.6,48,-65.8,48.5,-67.8,40.6C-69.8,32.7,-54.6,16.4,-49.3,3.1C-43.9,-10.2,-48.3,-20.3,-46.3,-28.1C-44.2,-35.9,-35.6,-41.3,-26.8,-48.5C-18,-55.7,-9,-64.7,2.6,-69.2C14.1,-73.6,28.3,-73.5,33.7,-64.4Z",
                                "M28.3,-49.8C36.5,-44.4,42.5,-36.3,51.8,-27.5C61,-18.7,73.5,-9.4,76.8,1.9C80.1,13.2,74.4,26.4,64.6,34.3C54.8,42.1,41,44.6,29.6,49.4C18.1,54.3,9.1,61.4,-2.2,65.3C-13.5,69.1,-27,69.6,-33.9,62.2C-40.7,54.7,-40.9,39.2,-42.8,27.5C-44.6,15.8,-48,7.9,-50.3,-1.3C-52.5,-10.5,-53.6,-21,-51.4,-32C-49.1,-43,-43.6,-54.5,-34.5,-59.3C-25.4,-64,-12.7,-62.1,-1.3,-59.9C10.1,-57.6,20.2,-55.1,28.3,-49.8Z"
                            ]
                        }}
                        transition={{
                            ease:'easeOut', 
                            duration: 10,
                            repeat: Infinity,
                            repeatType: 'reverse'}}
                        fill="#FF5B5B" 
                        d="M26.6,-50.8C35.8,-40.9,45.3,-36.2,53.4,-28.7C61.5,-21.1,68.2,-10.5,73,2.7C77.7,16,80.5,32,75.9,45.8C71.3,59.5,59.4,70.9,45.6,77.8C31.7,84.7,15.8,87.1,1.1,85.2C-13.6,83.3,-27.2,77,-38.2,68.4C-49.2,59.8,-57.5,48.9,-64.1,37.1C-70.6,25.3,-75.5,12.7,-76,-0.3C-76.5,-13.2,-72.7,-26.5,-65.9,-37.9C-59.1,-49.3,-49.3,-58.9,-37.8,-67.5C-26.4,-76.1,-13.2,-83.7,-2.2,-79.9C8.8,-76,17.5,-60.8,26.6,-50.8Z" 
                        transform="translate(200, 180), scale(0.7)" />
                </svg>
                <button className='w-40 absolute z-10 w-40'>
                    <img className='drop-shadow-xl' src='memoji-vid.mov' ></img>
                </button>
                
            </div>
        </>
    )
}

export default About