import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { fetchCarrinhoInfo } from "@/redux/features/carrinho-slice"
import { AppDispatch, RootState } from "@/redux/store"
import { useEffect } from "react"
import { FaShoppingBag } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

export function SheetCarrinho() {
    const dispatch = useDispatch<AppDispatch>();
    const carrinho = useSelector((state: RootState) => state.carrinho.value);

    useEffect(() => {
        dispatch(fetchCarrinhoInfo());
    }, [dispatch]);

    

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="bg-transparent hover:bg-stone-200">
                    <FaShoppingBag size={30} className="text-primary" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Verificar Carrinho</SheetTitle>
                    <SheetDescription>
                        <button onClick={() => {console.log()}}>debug</button>
                        Inscreva-se para garantir até 20% de desconto!
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Cupom
                        </Label>
                        <Input id="name" value="Não tem :(" className="col-span-3" />
                    </div>
                </div>
                <div>
                    <p className="flex items-center justify-center p-4">
                        produtos que voce deve gostar
                    </p>
                </div>
                <div className="flex items-center justify-between self-end">
                    <div className="text-lg font-semibold">
                        Total: R$
                    </div>
                    <div>
                        <Button type="submit">Finalizar Compra</Button>
                    </div>
                </div>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
