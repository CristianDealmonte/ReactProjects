import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, palceOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculacora de Propinas y Consumo</h1>
      </header>

      <main className="grid md:grid-cols-2 max-w-7xl mx-auto py-20">
        <div className="p-5">
          <h2 className="text-4xl font-black ">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            {order.length ? (
              <>
                <OrderContents 
                  order={order}
                  removeItem={removeItem}
                />

                <TipPercentage 
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotals 
                  order={order}
                  tip={tip}
                  placeOrder={palceOrder}
                />
              </>

            ) : (
              <div className="space-y-3 mt-10">
                <p className="text-center">La orden esta vacia</p> 
              </div>
            )}

          </div>
        </div>

      </main>
    </>
  )
}

export default App
