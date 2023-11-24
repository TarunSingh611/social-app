
import SlotMachine from '@/components/slotMachine'
import CurtainButton from '@/components/curtainButton'


export default function Home() {
  return (
    <div className="curtain relative">
      <div className="slotMachine absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SlotMachine />
        <div className='flex mx-auto mt-16 justify-center'>
          <CurtainButton key={0} type={0}/>
          <CurtainButton key={1} type={1}/>
        </div>
      </div>
    </div>
  )
}
