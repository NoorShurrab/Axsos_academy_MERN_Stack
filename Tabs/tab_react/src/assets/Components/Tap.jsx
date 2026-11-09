import React , {useState} from 'react'
import styles from './Tap.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Tap = (props) => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (e, index, tabCallback) => {
        setActiveTab(index)
        if(typeof tabCallback === 'function') {
                tabCallback();
        }
    }

    return (
        <div>
            <div className={styles["tab-container"]}>
                {props.tabs.map((tab, index) => (
                <button  key={index} onClick={(e) => handleTabClick(e, index, tab.onClick)} className={`${styles['tab-button']} ${activeTab === index ? styles['active'] : ''}`}> {tab.label} </button>

            ))}
            </div>
            <div className= {styles["tab-content"]}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab} 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }}     
                        exit={{ opacity: 0, scale: 0.95 }}      
                        transition={{ duration: 0.4 }}          
                    >
                {props.tabs[activeTab].content}
                </motion.div>
                </AnimatePresence>
            </div>

        </div>
    )
}

export default Tap
