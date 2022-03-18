import { FaTrash } from "react-icons/fa";
import styles from "./Table.module.css";

const Table = ({ className, data, columns, deleteAction }) => {
  const tableClassName = `${styles.table} ${className}`.trim();

  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({ columnId }) => data[index][columnId]);
  });

  return (
    <table className={tableClassName}>
      <thead>
        <tr>
          {columns.map(({ columnId, Header }) => {
            return <td key={columnId}>{Header}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
              <td key={index}>
                <button onClick={() => deleteAction({ id: data[index]["id"] })}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
