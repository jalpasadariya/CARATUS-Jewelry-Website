import React from "react";




const Custmores = () =>{
    return(
        <>
        <section className="testimonials">
    <h2 className="section-title">What Customers Are Saying!</h2>
    <div className="container">
        <div className="testimonial-grid">
            {/* Card 1 */}
            <div className="testimonial-card">
                <div className="card-header">
                    <div>
                        <h4 className="customer-name">Hanna Joseph</h4>
                        <div className="stars">★★★★★</div>
                    </div>
                    <span className="quote-icon">"</span>
                </div>
                <p className="review-text">
                    A seamless mix of beauty and durability - Caratus Jewels never fails to impress with their unique creations.
                </p>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
                <div className="card-header">
                    <div>
                        <h4 className="customer-name">John Mill</h4>
                        <div className="stars">★★★★★</div>
                    </div>
                    <span className="quote-icon">"</span>
                </div>
                <p className="review-text">
                    Caratus Jewels delivers unmatched quality with every piece, making it a trusted brand for timeless elegance.
                </p>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
                <div className="card-header">
                    <div>
                        <h4 className="customer-name">Michael Scott</h4>
                        <div className="stars">★★★★★</div>
                    </div>
                    <span className="quote-icon">"</span>
                </div>
                <p className="review-text">
                    Caratus Jewels redefines elegance with their beautifully designed and meticulously crafted pieces.
                </p>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default Custmores;