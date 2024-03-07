import style from "./loadingRing.module.css";

const LoadingRing = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className={style.container}>
                <svg className={style.svg} height="200" width="200">
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "rgba(0, 128, 231, 0.2)",
                                }}
                            />
                            <stop offset="50%" style={{ stopColor: '#00569b' }} />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "rgba(0, 82, 143, 0.2)",
                                }}
                            />
                        </linearGradient>
                    </defs>
                    <circle
                        className={style.ring}
                        cx="100"
                        cy="102"
                        r="70"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default LoadingRing;
