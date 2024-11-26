import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"

const Home = () => {
    return (
        <section className="w-full h-screen relative">
            <Canvas
            className="w-full h-screen bg-transparent"
            camara={{ near: 0.1, far: 1000, fav:75, position: [0, 0, 5]}}
            >
<Suspense fallback={<Loader/>}>
  <directionalLight />
  <ambientLight />
  <pointLight />
</Suspense>
            </Canvas>
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                popup
            </div>
        </section>
    )
}

export default Home