export default function UserList({ users, deleteUser }) {
  return (
    <div className="card">
      <p className="card-title">{users.length} utilisateur{users.length !== 1 ? "s" : ""}</p>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={4} className="empty">Aucun utilisateur pour l'instant</td>
            </tr>
          ) : (
            users.map((user, i) => (
              <tr key={i}>
                <td className="td-index">{i + 1}</td>
                <td>{user.name}</td>
                <td className="td-email">{user.email}</td>
                <td style={{ textAlign: "right" }}>
                  <button className="btn-delete" onClick={() => deleteUser(i)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
