import style from "./skeleton1.module.css";

const skeleton1 = () => {
    return (
        <div className={style.main}>
            <div className={style.loadSidebar}></div>

            <div className={style.inner}>
                <div className={style.header}>
                    <div className={style.loadAvatar}></div>
                    <div className={style.info}>
                        <div className={style.loadTitle}></div>
                        <div className={style.loadText}></div>
                    </div>
                </div>

                <div className={style.items}>
                    <div className={style.loadItem}></div>
                    <div className={style.loadItem}></div>
                    <div className={style.loadItem}></div>
                </div>
            </div>
        </div>
    );
};

export default skeleton1;