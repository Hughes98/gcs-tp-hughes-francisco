# Plan de Pruebas - Gestor de Clientes

## Casos de Prueba
- **CP-01:** Carga de interfaz gráfica.
- **CP-02 (Ticket #101):** Validación de campo teléfono.
  - *Válido:* `"123456"` -> `true`.
  - *Inválido:* `"123a56"` -> `false`.