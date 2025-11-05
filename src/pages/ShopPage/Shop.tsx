import styles from "./Shop.module.css";
import { cars } from "./carsData";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";


type BasketItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    img: string;
};

type ShopProps = {
    basket: BasketItem[];
    setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
};

export default function Shop({ setBasket }: ShopProps) {

    const [select, setSelect] = useState("ALL")
    const [price, setPrice] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null);

    const filteredCars = cars.filter((car) => {

        if (select !== "ALL" && car.category !== select) return false;


        if (price) {
            const numericPrice = Number(car.price.replace(/\$|,/g, ""));

            if (price === "0-70000") return numericPrice <= 70000;
            if (price === "0-110000") return numericPrice <= 110000;
            if (price === "0-150000") return numericPrice <= 150000;
            if (price === "150000+") return numericPrice > 150000;
        }

        return true;
    });

    const addToCart = (car: { id: number; title: string; price: string; img: string }) => {
        const priceNumber = Number(car.price.replace(/\$|,/g, ""));

        setBasket(prev => {
            const exist = prev.find(item => item.id === car.id);
            if (exist) {
                return prev.map(item =>
                    item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { id: car.id, title: car.title, price: priceNumber, quantity: 1, img: car.img }];
            }
        });
        setMessage(`${car.title} added to cart`);
        setTimeout(() => setMessage(null), 1000);
    };

    return (
        <>
            <h1 className={styles.title}>ALL BMW M SERIES AT A GLANCE</h1>

            <div className={styles.container}>

                <aside className={styles.sidebar}>
                    <h5>FILTER</h5>

                    <div className={styles.filterSection}>
                        <h6>PRICE RANGE</h6>
                        <label>
                            <input type="checkbox"
                                onChange={() =>
                                    setPrice(price === "0-70000" ? null : "0-70000")
                                }
                                checked={price === "0-70000"}
                            />
                            $0 - $70,000
                        </label>
                        <label>
                            <input type="checkbox"
                                onChange={() =>
                                    setPrice(price === "0-110000" ? null : "0-110000")
                                }
                                checked={price === "0-110000"}
                            />
                            $0 - $110,000
                        </label>
                        <label>
                            <input type="checkbox"
                                onChange={() =>
                                    setPrice(price === "0-150000" ? null : "0-150000")
                                }
                                checked={price === "0-150000"}
                            />
                            $0 - $150,000
                        </label>
                        <label>
                            <input type="checkbox"
                                onChange={() =>
                                    setPrice(price === "150000+" ? null : "150000+")
                                }
                                checked={price === "150000+"}
                            />
                            $150,000+
                        </label>
                    </div>

                    <div className={styles.filterSection}>
                        <h6>VEHICLE CATEGORY</h6>
                        <div className={styles.categories}>
                            {["ALL", "X", "7", "6", "5", "4", "3", "2", "1"].map((cat) => (
                                <span key={cat}
                                    onClick={() => setSelect(cat)}
                                    className={
                                        select === cat
                                            ? `${styles.activeCategory}`
                                            : ""
                                    }
                                >
                                    {cat}
                                </span>
                            ))
                            }
                        </div>
                    </div>
                </aside>

                <main className={styles.cardsContainer}>
                    {filteredCars.map((car) => (
                        <div className={styles.card} key={car.id}>
                            <img src={car.img} alt={car.title} className={styles.cardImg} />
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>{car.title}</h5>
                                <p className={styles.cardText}>{car.description}</p>
                                <p className={styles.cardPrice}>{car.price}</p>
                                <button className={styles.cardBtn} onClick={() => addToCart(car)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </main>

                {message && (
                    <div className="position-fixed bottom-0 end-0 m-3 p-2 bg-success text-white rounded">
                        {message}
                    </div>
                )}

            </div>

            <Footer />

        </>
    );
}
