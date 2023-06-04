function BasicSection({children}) {
   return (
      <section style={{
         'padding': '15px 15px',
         'background': 'rgba(255, 255, 255, 0.25)',
         'border': '1px solid rgba(255, 255, 255, 0.25)',
         'border-radius': '32px',
         'box-shadow': '2px 4px 19px rgba(0, 0, 0, 0.25)'
      }}>
         {children}
      </section>
   )
}

export default BasicSection;