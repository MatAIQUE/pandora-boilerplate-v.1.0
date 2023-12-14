import { Badge, Button } from "./components";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    <div className="h-screen flex flex-col w-full text-center">
      
      {/* Page Controller */}
        {/* Add .hidden when controllers should be hidden */}
        <div className="py-2">
          1
        </div>
      {/* End of Page Controller */}
      
      {/* Ads Container */}
        <div className="flex flex-auto justify-center items-start">
          2
        </div>
      {/* End of Ads Container */}
      
      {/* Page Content */}
        <div className="basis-2/4 flex flex-auto justify-center items-start">
          <Card/>
        </div>
      {/* End of Page Content */}

    </div>
    </>
    
  )
}
