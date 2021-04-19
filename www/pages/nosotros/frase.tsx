export interface FraseProps {
  frase?: string 
}

const Frase = ({ frase }: FraseProps) => (
  <div className="bg-x-blue-500 w-full py-24">
    <div className="font-light mx-auto text-white text-center text-2xl italic sm:text-4xl lg:text-5xl" style={{width: '30ch'}}>
      <p>{frase}</p>
    </div>
  </div>
)

export default Frase
